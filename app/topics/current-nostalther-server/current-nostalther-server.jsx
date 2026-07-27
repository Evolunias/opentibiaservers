import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-server');
}

export default function CurrentNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-server" />;
}
