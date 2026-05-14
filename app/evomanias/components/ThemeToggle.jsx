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
          ? 'linear-gradient(135deg, rgba(124, 184, 255, 0.15), rgba(124, 184, 255, 0.05))'
          : 'linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(37, 99, 235, 0.05))',
        border: `2px solid ${isDark ? '#7cb8ff' : '#2563eb'}`,
        borderRadius: '12px',
        padding: '0.75rem 1.25rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        width: 'auto',
        minWidth: '50px',
        height: '50px',
        transition: 'all 0.3s ease',
        color: isDark ? '#7cb8ff' : '#2563eb',
        boxShadow: isDark
          ? '0 0 25px rgba(124, 184, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          : '0 0 20px rgba(37, 99, 235, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        fontSize: '0.85rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = isDark
          ? '0 0 35px rgba(124, 184, 255, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          : '0 0 30px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
        e.currentTarget.style.transform = 'scale(1.08)';
        e.currentTarget.style.background = isDark
          ? 'linear-gradient(135deg, rgba(124, 184, 255, 0.25), rgba(124, 184, 255, 0.1))'
          : 'linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(37, 99, 235, 0.1))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = isDark
          ? '0 0 25px rgba(124, 184, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          : '0 0 20px rgba(37, 99, 235, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.background = isDark
          ? 'linear-gradient(135deg, rgba(124, 184, 255, 0.15), rgba(124, 184, 255, 0.05))'
          : 'linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(37, 99, 235, 0.05))';
      }}
    >
      {isDark ? (
        <>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 3px rgba(124, 184, 255, 0.4))' }}>
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <span>Light</span>
        </>
      ) : (
        <>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 3px rgba(37, 99, 235, 0.3))' }}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <span>Dark</span>
        </>
      )}
    </button>
  );
}
