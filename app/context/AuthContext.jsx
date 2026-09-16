'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProfile = useCallback(async (userId) => {
    try {
      const { data, error: err } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (err && err.code !== 'PGRST116') throw err;
      setProfile(data || null);
    } catch (err) {
      console.error('Error loading profile:', err);
    }
  }, []);

  const checkUser = useCallback(async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        await loadProfile(session.user.id);
      }
    } catch (err) {
      console.error('Error checking user:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [loadProfile]);

  useEffect(() => {
    checkUser();
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser(session.user);
        await loadProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, [checkUser, loadProfile]);

  const signUp = async (email, password, username, profileData = {}) => {
    try {
      setError(null);
      const { data: { user: newUser }, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      try {
        if (email) {
          fetch('/api/newsletter/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email,
              name: username || profileData?.display_name || profileData?.full_name || undefined,
              source: 'registration',
            }),
          }).catch(() => {});
        }
      } catch {
        /* ignore newsletter errors */
      }

      if (newUser) {
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert([{
            id: newUser.id,
            username,
            display_name: profileData.display_name || username,
            account_type: profileData.account_type || 'player',
          }]);

        if (profileError) throw profileError;
        setUser(newUser);
        await loadProfile(newUser.id);
      }

      return { success: true };
    } catch (err) {
      const message = err.message || 'Sign up failed';
      setError(message);
      return { success: false, error: message };
    }
  };

  const signIn = async (email, password) => {
    try {
      setError(null);
      const { data: { user: signedInUser }, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      if (signedInUser) {
        setUser(signedInUser);
        await loadProfile(signedInUser.id);
      }

      return { success: true };
    } catch (err) {
      const message = err.message || 'Sign in failed';
      setError(message);
      return { success: false, error: message };
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;
      setUser(null);
      setProfile(null);
      return { success: true };
    } catch (err) {
      const message = err.message || 'Sign out failed';
      setError(message);
      return { success: false, error: message };
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, error, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
