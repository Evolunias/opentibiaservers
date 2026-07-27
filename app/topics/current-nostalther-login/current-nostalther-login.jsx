import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-login');
}

export default function CurrentNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-login" />;
}
