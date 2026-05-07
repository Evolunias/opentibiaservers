'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { supabase } from '@/lib/supabase';

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, loading, signOut } = useAuth();
  const [userServers, setUserServers] = useState([]);
  const [loadingServers, setLoadingServers] = useState(true);
  const [stats, setStats] = useState({ total: 0, verified: 0, pending: 0, failed: 0 });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    } else if (user) {
      loadUserServers();
    }
  }, [user, loading, router]);

  const loadUserServers = async () => {
    try {
      const { data, error } = await supabase
        .from('servers')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setUserServers(data || []);

      const counts = {
        total: data?.length || 0,
        verified: data?.filter(s => s.verification_status === 'verified').length || 0,
        pending: data?.filter(s => s.verification_status === 'pending').length || 0,
        failed: data?.filter(s => s.verification_status === 'failed').length || 0,
      };
      setStats(counts);
    } catch (err) {
      console.error('Error loading servers:', err);
    } finally {
      setLoadingServers(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const handleDeleteServer = async (serverId) => {
    if (!confirm('Are you sure you want to delete this server listing?')) return;

    try {
      const { error } = await supabase
        .from('servers')
        .delete()
        .eq('id', serverId)
        .eq('user_id', user.id);

      if (error) throw error;
      setUserServers(userServers.filter(s => s.id !== serverId));
    } catch (err) {
      console.error('Error deleting server:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your servers and account</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/submit-server"
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              + Submit Server
            </Link>
            <button
              onClick={handleSignOut}
              className="px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-all duration-300"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user.email[0].toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{profile?.username || 'User'}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500 mt-1">Account created {new Date(user.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Total Servers</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Verified</p>
            <p className="text-3xl font-bold text-green-600">{stats.verified}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Pending Verification</p>
            <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Verification Failed</p>
            <p className="text-3xl font-bold text-red-600">{stats.failed}</p>
          </div>
        </div>

        {/* Servers List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-900">Your Servers</h2>
          </div>

          {loadingServers ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-gray-600">Loading servers...</p>
              </div>
            </div>
          ) : userServers.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-600 mb-4">You haven't submitted any servers yet.</p>
              <Link
                href="/submit-server"
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Submit Your First Server
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Server Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">IP:Port</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Verification</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Submitted</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {userServers.map(server => (
                    <tr key={server.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <Link
                          href={`/server/${server.id}`}
                          className="text-blue-600 hover:underline font-semibold"
                        >
                          {server.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{server.ip}:{server.port}</td>
                      <td className="px-6 py-4">
                        {server.is_online ? (
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                            Online
                          </span>
                        ) : (
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
                            Offline
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {server.verification_status === 'verified' && (
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                            ✓ Verified
                          </span>
                        )}
                        {server.verification_status === 'pending' && (
                          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                            ⏳ Pending
                          </span>
                        )}
                        {server.verification_status === 'failed' && (
                          <span
                            title={server.verification_error || 'Verification failed'}
                            className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full cursor-help"
                          >
                            ✗ Failed
                          </span>
                        )}
                        {server.verification_status === 'unverified' && (
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm font-semibold rounded-full">
                            Not Started
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm">
                        {new Date(server.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <Link
                            href={`/server/${server.id}`}
                            className="text-blue-600 hover:underline text-sm font-medium"
                          >
                            View
                          </Link>
                          <button
                            onClick={() => handleDeleteServer(server.id)}
                            className="text-red-600 hover:underline text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
