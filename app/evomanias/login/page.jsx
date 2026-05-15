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

  const bgColor = isDark ? '#0f0f14' : '#ffffff';
  const textColor = isDark ? '#ffffff' : '#1f2937';
  const textSecondary = isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(71, 85, 105, 0.6)';
  const cardBg = isDark ? 'rgba(25, 25, 32, 0.95)' : 'rgba(255, 255, 255, 0.95)';
  const cardBorder = isDark ? 'rgba(124, 184, 255, 0.25)' : 'rgba(71, 85, 105, 0.1)';
  const primaryColor = isDark ? '#64b5f6' : '#2563eb';
  const buttonGradient = isDark
    ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
    : 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)';
  const inputBg = isDark ? 'rgba(255, 255, 255, 0.95)' : 'rgba(37, 99, 235, 0.05)';
  const inputBorder = isDark ? 'rgba(124, 184, 255, 0.5)' : 'rgba(37, 99, 235, 0.2)';
  const inputBorderFocus = isDark ? '#3b82f6' : 'rgba(37, 99, 235, 0.6)';
  const inputBgFocus = isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(37, 99, 235, 0.08)';
  const inputTextColor = isDark ? '#1f2937' : '#1f2937';

  const ButtonStyle = (primary = true) => ({
    padding: primary ? '0.875rem 2.5rem' : '0.875rem 2.5rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    background: primary
      ? buttonGradient
      : isDark ? 'rgba(100, 181, 246, 0.12)' : 'rgba(37, 99, 235, 0.08)',
    color: primary ? '#ffffff' : primaryColor,
    border: primary ? 'none' : `1.5px solid ${primaryColor}`,
    borderRadius: '6px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: primary
      ? `0 4px 12px ${isDark ? 'rgba(37, 99, 235, 0.3)' : 'rgba(37, 99, 235, 0.25)'}, 0 0 0 1px ${isDark ? 'rgba(124, 184, 255, 0.2)' : 'rgba(37, 99, 235, 0.1)'}`
      : 'none',
    display: 'inline-block'
  });

  return (
    <div style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
      <style>{`
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-100px) rotateX(30deg); } to { opacity: 1; transform: translateY(0) rotateX(0deg); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.7) rotateZ(5deg); } to { opacity: 1; transform: scale(1) rotateZ(0deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(37, 99, 235, 0.4); } 50% { transform: scale(1.1); box-shadow: 0 0 50px rgba(37, 99, 235, 0.8); } }
        .epic-btn { animation: pulse 2.5s ease-in-out infinite; }
        * { box-sizing: border-box; }
        input::placeholder { color: #9ca3af !important; opacity: 1 !important; }
        input::-webkit-input-placeholder { color: #9ca3af !important; opacity: 1 !important; }
        input::-moz-placeholder { color: #9ca3af !important; opacity: 1 !important; }
        input::-ms-input-placeholder { color: #9ca3af !important; opacity: 1 !important; }
      `}</style>

      <section style={{
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          opacity: 0.5,
          zIndex: -1
        }} />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 10vw, 3.5rem)',
          fontWeight: 300,
          margin: '0 0 1rem 0',
          lineHeight: 1,
          color: textColor,
          letterSpacing: '2px',
          animation: 'slideInDown 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both'
        }}>
          Welcome Back
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          fontWeight: 400,
          color: textSecondary,
          margin: '0.5rem 0 2.5rem 0',
          maxWidth: '700px',
          lineHeight: 1.6,
          letterSpacing: '0.5px',
          animation: 'fadeIn 1.5s ease-out 0.7s both'
        }}>
          Sign in to your Evomanias account
        </p>

        <div style={{
          width: '100%',
          maxWidth: '500px',
          background: cardBg,
          backdropFilter: 'blur(10px)',
          border: `2px solid ${cardBorder}`,
          borderRadius: '2px',
          padding: '3rem',
          boxShadow: `0 20px 50px ${isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(37, 99, 235, 0.1)'}`,
          animation: 'zoomIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) both'
        }}>
          {error && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '2px solid rgba(239, 68, 68, 0.3)',
              color: '#ff6b6b',
              padding: '1rem',
              borderRadius: '2px',
              marginBottom: '1.5rem',
              fontSize: '0.95rem',
              fontWeight: 500
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.95rem',
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
                  padding: '0.875rem 1rem',
                  background: inputBg,
                  border: `2px solid ${inputBorder}`,
                  borderRadius: '6px',
                  color: inputTextColor,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  outline: 'none',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontFamily: 'inherit',
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = inputBorderFocus;
                  e.target.style.background = inputBgFocus;
                  e.target.style.boxShadow = isDark
                    ? 'inset 0 2px 4px rgba(0, 0, 0, 0.05), 0 0 0 3px rgba(59, 130, 246, 0.2)'
                    : 'inset 0 2px 4px rgba(0, 0, 0, 0.05), 0 0 0 3px rgba(37, 99, 235, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = inputBorder;
                  e.target.style.background = inputBg;
                  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.05)';
                }}
                disabled={loading}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '0.95rem',
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
                  padding: '0.875rem 1rem',
                  background: inputBg,
                  border: `2px solid ${inputBorder}`,
                  borderRadius: '4px',
                  color: inputTextColor,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  outline: 'none',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontFamily: 'inherit',
                  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = inputBorderFocus;
                  e.target.style.background = inputBgFocus;
                  e.target.style.boxShadow = isDark
                    ? 'inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(124, 184, 255, 0.1)'
                    : 'inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 0 0 3px rgba(37, 99, 235, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = inputBorder;
                  e.target.style.background = inputBg;
                  e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.1)';
                }}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={ButtonStyle(true)}
              className="epic-btn"
              onMouseEnter={(e) => {
                !loading && (e.target.style.opacity = '0.9');
              }}
              onMouseLeave={(e) => {
                !loading && (e.target.style.opacity = '1');
              }}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div style={{
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: `2px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(37, 99, 235, 0.1)'}`,
            textAlign: 'center'
          }}>
            <p style={{
              color: textSecondary,
              marginBottom: '1rem',
              fontSize: '0.95rem'
            }}>
              Don't have an account?{' '}
              <Link href="/evomanias/register" style={{
                color: primaryColor,
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'opacity 0.3s'
              }}>
                Create one
              </Link>
            </p>
            <Link href="/evomanias" style={{
              color: textSecondary,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
