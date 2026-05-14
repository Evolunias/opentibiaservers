'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const ButtonStyle = (primary = true) => ({
    padding: primary ? '1.3rem 3.5rem' : '1.3rem 3.5rem',
    fontSize: '1.15rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '3px',
    background: primary
      ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
      : 'rgba(37, 99, 235, 0.1)',
    color: primary ? '#ffffff' : '#2563eb',
    border: primary ? 'none' : '2px solid #2563eb',
    borderRadius: '2px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: primary
      ? '0 0 30px rgba(37, 99, 235, 0.4)'
      : '0 0 20px rgba(37, 99, 235, 0.2)',
    display: 'inline-block'
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: isDark ? '#ffffff' : '#ffffff',
      color: isDark ? '#333333' : '#333333',
      overflow: 'hidden',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-40px) translateX(15px); }
          50% { transform: translateY(-70px) translateX(-8px); }
          75% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes pulse { 0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(37, 99, 235, 0.4); } 50% { transform: scale(1.1); box-shadow: 0 0 50px rgba(37, 99, 235, 0.8); } }
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-100px) rotateX(30deg); } to { opacity: 1; transform: translateY(0) rotateX(0deg); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(100px) rotateX(-30deg); } to { opacity: 1; transform: translateY(0) rotateX(0deg); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.7) rotateZ(5deg); } to { opacity: 1; transform: scale(1) rotateZ(0deg); } }
        * { box-sizing: border-box; }
      `}</style>

      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#ffffff'
        }} />

        <div style={{
          position: 'absolute',
          width: '1200px',
          height: '1200px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          left: mousePos.x - 600,
          top: mousePos.y - 600,
          transition: 'all 0.5s ease-out',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          opacity: 0.6
        }} />

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(37, 99, 235, 0.02) 25%, rgba(37, 99, 235, 0.02) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.02) 75%, rgba(37, 99, 235, 0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(37, 99, 235, 0.02) 25%, rgba(37, 99, 235, 0.02) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.02) 75%, rgba(37, 99, 235, 0.02) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.3
        }} />
      </div>

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          animation: 'slideInDown 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) both'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 10vw, 4rem)',
            fontWeight: 300,
            margin: '0 0 1rem 0',
            lineHeight: 1,
            color: '#1f2937',
            letterSpacing: '2px'
          }}>
            Welcome Back
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 400,
            color: 'rgba(71, 85, 105, 0.85)',
            margin: '0 0 2rem 0',
            maxWidth: '500px',
            lineHeight: 1.6,
            letterSpacing: '0.5px'
          }}>
            Sign in to your EVOMANIAS account
          </p>
        </div>

        <div style={{
          width: '100%',
          maxWidth: '500px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(37, 99, 235, 0.2)',
          borderRadius: '8px',
          padding: '3rem',
          boxShadow: '0 20px 50px rgba(37, 99, 235, 0.1)',
          animation: 'zoomIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) both'
        }}>
          {error && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '2px solid rgba(239, 68, 68, 0.3)',
              color: '#dc2626',
              padding: '1rem',
              borderRadius: '6px',
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
                color: '#1f2937',
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
                  background: 'rgba(37, 99, 235, 0.05)',
                  border: '2px solid rgba(37, 99, 235, 0.2)',
                  borderRadius: '6px',
                  color: '#1f2937',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'all 0.3s',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(37, 99, 235, 0.6)';
                  e.target.style.background = 'rgba(37, 99, 235, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(37, 99, 235, 0.2)';
                  e.target.style.background = 'rgba(37, 99, 235, 0.05)';
                }}
                disabled={loading}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#1f2937',
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
                  background: 'rgba(37, 99, 235, 0.05)',
                  border: '2px solid rgba(37, 99, 235, 0.2)',
                  borderRadius: '6px',
                  color: '#1f2937',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'all 0.3s',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(37, 99, 235, 0.6)';
                  e.target.style.background = 'rgba(37, 99, 235, 0.08)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(37, 99, 235, 0.2)';
                  e.target.style.background = 'rgba(37, 99, 235, 0.05)';
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
                e.target.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
              }}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div style={{
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '2px solid rgba(37, 99, 235, 0.1)',
            textAlign: 'center'
          }}>
            <p style={{
              color: 'rgba(71, 85, 105, 0.8)',
              marginBottom: '1rem',
              fontSize: '0.95rem'
            }}>
              Don't have an account?{' '}
              <Link href="/evomanias/register" style={{
                color: '#2563eb',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'opacity 0.3s'
              }}>
                Create one
              </Link>
            </p>
            <Link href="/evomanias" style={{
              color: 'rgba(71, 85, 105, 0.6)',
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
