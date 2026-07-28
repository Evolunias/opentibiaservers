import { redirect } from 'next/navigation';

export default function LoginPage({ searchParams = {} }) {
  const next = new URLSearchParams({ auth: 'login' });
  if (searchParams.redirect) next.set('redirect', searchParams.redirect);
  redirect(`/?${next.toString()}`);
}
