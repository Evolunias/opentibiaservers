import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-private-server');
}

export default function CurrentCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-canob-private-server" />;
}
