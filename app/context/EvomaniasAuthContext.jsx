'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const EvomaniasAuthContext = createContext();

export function EvomaniasAuthProvider({ children }) {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAccount = localStorage.getItem('evomanias_account');
    if (storedAccount) {
      setAccount(JSON.parse(storedAccount));
    }
    setLoading(false);
  }, []);

  const register = async (email, password, username) => {
    try {
      const response = await fetch('/api/evomanias/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'register', email, password, username }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      const newAccount = { id: data.accountId, email, name: username };
      setAccount(newAccount);
      localStorage.setItem('evomanias_account', JSON.stringify(newAccount));
      return newAccount;
    } catch (error) {
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch('/api/evomanias/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', email, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setAccount(data.account);
      localStorage.setItem('evomanias_account', JSON.stringify(data.account));
      return data.account;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setAccount(null);
    localStorage.removeItem('evomanias_account');
  };

  return (
    <EvomaniasAuthContext.Provider value={{ account, loading, register, login, logout }}>
      {children}
    </EvomaniasAuthContext.Provider>
  );
}

export function useEvomaniasAuth() {
  const context = useContext(EvomaniasAuthContext);
  if (!context) {
    throw new Error('useEvomaniasAuth must be used within EvomaniasAuthProvider');
  }
  return context;
}
