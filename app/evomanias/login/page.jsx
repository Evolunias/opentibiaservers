'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEvomaniasAuth } from '../../context/EvomaniasAuthContext';
import { useEvomaniasTheme } from '../context/EvomaniasThemeContext';

export default function EvomaniasLogin() {
  const router = useRouter();
  const { login } = useEvomaniasAuth();
  const { theme } = useEvomaniasTheme();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isDark = theme === 'dark';

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

  const cardBg = isDark
    ? 'rgba(20, 20, 25, 0.8)'
    : 'rgba(255, 255, 255, 0.95)';
  const cardBorder = isDark
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(71, 85, 105, 0.1)';
  const inputBg = isDark
    ? 'rgba(0, 0, 0, 0.3)'
    : 'rgba(71, 85, 105, 0.05)';
  const inputBorder = isDark
    ? 'rgba(255, 255, 255, 0.15)'
    : 'rgba(71, 85, 105, 0.2)';
  const textColor = isDark
    ? 'rgba(255, 255, 255, 0.95)'
    : 'rgba(31, 41, 55, 0.95)';
  const textMuted = isDark
    ? 'rgba(255, 255, 255, 0.6)'
    : 'rgba(107, 114, 128, 0.6)';

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .gradient-header {
          background: linear-gradient(135deg, #7cb8ff 0%, #2563eb 50%, #5a9fe6 100%);
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
      `}</style>
      <div className="w-full max-w-md">
        <div
          style={{
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            borderRadius: '12px',
            overflow: 'hidden',
            backdropFilter: 'blur(12px)',
            boxShadow: isDark
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(0, 0, 0, 0.08)'
          }}
        >
          {/* Header */}
          <div className="gradient-header px-8 py-8 text-center">
            <h1 style={{ color: '#ffffff', fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Welcome Back
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
              Sign in to your EVOMANIAS account
            </p>
          </div>

          {/* Form */}
          <div style={{ padding: '2rem' }}>
            {error && (
              <div style={{
                background: isDark
                  ? 'rgba(239, 68, 68, 0.15)'
                  : 'rgba(239, 68, 68, 0.1)',
                border: `1px solid ${isDark ? 'rgba(239, 68, 68, 0.5)' : 'rgba(239, 68, 68, 0.3)'}`,
                color: isDark ? 'rgba(248, 113, 113, 0.9)' : 'rgba(220, 38, 38, 0.9)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                fontSize: '0.875rem'
              }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: textColor,
                  marginBottom: '0.5rem'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: inputBg,
                    border: `1px solid ${inputBorder}`,
                    borderRadius: '8px',
                    color: textColor,
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#7cb8ff';
                    e.target.style.boxShadow = isDark
                      ? '0 0 0 3px rgba(124, 184, 255, 0.1)'
                      : '0 0 0 3px rgba(37, 99, 235, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = inputBorder;
                    e.target.style.boxShadow = 'none';
                  }}
                  disabled={loading}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: textColor,
                  marginBottom: '0.5rem'
                }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: inputBg,
                    border: `1px solid ${inputBorder}`,
                    borderRadius: '8px',
                    color: textColor,
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#7cb8ff';
                    e.target.style.boxShadow = isDark
                      ? '0 0 0 3px rgba(124, 184, 255, 0.1)'
                      : '0 0 0 3px rgba(37, 99, 235, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = inputBorder;
                    e.target.style.boxShadow = 'none';
                  }}
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #7cb8ff 0%, #2563eb 100%)',
                  color: '#ffffff',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '1rem',
                  opacity: loading ? 0.7 : 1,
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
                }}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${cardBorder}`,
              textAlign: 'center'
            }}>
              <p style={{ color: textMuted, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                Don't have an account?{' '}
                <Link href="/evomanias/register" style={{
                  color: '#7cb8ff',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  Create one
                </Link>
              </p>
              <Link href="/evomanias" style={{
                color: textMuted,
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = isDark ? '#7cb8ff' : '#2563eb'}
              onMouseLeave={(e) => e.target.style.color = textMuted}
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
