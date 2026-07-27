import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-private-server');
}

export default function CurrentNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-private-server" />;
}
