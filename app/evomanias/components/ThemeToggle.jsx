'use client';

import { useEvomaniasTheme } from '../context/EvomaniasThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme, isMounted } = useEvomaniasTheme();

  if (!isMounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        background: isDark
          ? 'rgba(124, 184, 255, 0.08)'
          : 'rgba(37, 99, 235, 0.08)',
        border: `1.5px solid ${isDark ? 'rgba(124, 184, 255, 0.25)' : 'rgba(37, 99, 235, 0.25)'}`,
        borderRadius: '10px',
        padding: '0.6rem 0.8rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        minWidth: '44px',
        height: '44px',
        transition: 'all 0.3s ease',
        color: isDark ? '#7cb8ff' : '#2563eb',
        boxShadow: isDark
          ? '0 0 15px rgba(124, 184, 255, 0.15)'
          : '0 0 12px rgba(37, 99, 235, 0.12)',
        backdropFilter: 'blur(8px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = isDark
          ? '0 0 25px rgba(124, 184, 255, 0.25)'
          : '0 0 20px rgba(37, 99, 235, 0.2)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = isDark
          ? '0 0 15px rgba(124, 184, 255, 0.15)'
          : '0 0 12px rgba(37, 99, 235, 0.12)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.35rem' }}>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.35rem' }}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
