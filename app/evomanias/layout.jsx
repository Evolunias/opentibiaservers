'use client';

import { EvomaniasAuthProvider } from '../context/EvomaniasAuthContext';
import Header from '../components/Header';

export default function EvomaniasLayout({ children }) {
  return (
    <EvomaniasAuthProvider>
      <div className="min-h-screen bg-white">
        <Header />
        {children}
      </div>
    </EvomaniasAuthProvider>
  );
}
