import { redirect } from 'next/navigation';

export default function RegisterPage({ searchParams = {} }) {
  const next = new URLSearchParams({ auth: 'register' });
  if (searchParams.redirect) next.set('redirect', searchParams.redirect);
  redirect(`/?${next.toString()}`);
}
