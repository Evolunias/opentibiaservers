'use client';

import { EvomaniasAuthProvider } from '../context/EvomaniasAuthContext';
import { ThemeProvider } from '../context/ThemeContext';
import EvomaniasHeader from './components/EvomaniasHeader';
import EvomaniasFooter from './components/EvomaniasFooter';
import ThemeToggle from './components/ThemeToggle';
import './evomanias.css';

export default function EvomaniasLayout({ children }) {
  return (
    <ThemeProvider>
      <EvomaniasAuthProvider>
        <div className="min-h-screen text-white flex flex-col" style={{ background: 'linear-gradient(135deg, #050508 0%, #0a0a0f 50%, #0f0f15 100%)' }}>
          <ThemeToggle />
          <EvomaniasHeader />
          <main className="flex-1">
            {children}
          </main>
          <EvomaniasFooter />
        </div>
      </EvomaniasAuthProvider>
    </ThemeProvider>
  );
}
