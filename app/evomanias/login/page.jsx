'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEvomaniasAuth } from '../../context/EvomaniasAuthContext';

export default function EvomaniasLogin() {
  const router = useRouter();
  const { login } = useEvomaniasAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      setLoading(false);
      return;
    }

    try {
      await login(formData.email, formData.password);
      router.push('/evomanias/account');
    } catch (err) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-purple-100">Sign in to your EVOMANIAS account</p>
          </div>

          {/* Form */}
          <div className="p-8">
            {error && (
              <div className="bg-red-900/30 border border-red-600/50 text-red-300 px-4 py-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition"
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 mt-6"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-800 text-center">
              <p className="text-gray-400 mb-3">
                Don't have an account?{' '}
                <Link href="/evomanias/register" className="text-purple-400 font-semibold hover:opacity-80 transition">
                  Create one
                </Link>
              </p>
              <Link href="/evomanias" className="text-gray-500 hover:text-gray-400 text-sm transition">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
