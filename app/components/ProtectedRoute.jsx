'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { useEffect } from 'react';

export function withAuth(Component, redirectTo = '/?auth=login') {
  return function ProtectedComponent(props) {
    const router = useRouter();
    const { user, loading } = useAuth();

    useEffect(() => {
      if (!loading && !user) {
        const redirect = props.params?.id
          ? `${redirectTo}${redirectTo.includes('?') ? '&' : '?'}redirect=/${props.pathname || ''}`
          : redirectTo;
        router.push(redirect);
      }
    }, [user, loading, router, props]);

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

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
}
