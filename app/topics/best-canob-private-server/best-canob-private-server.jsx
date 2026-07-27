import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-private-server');
}

export default function BestCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-canob-private-server" />;
}
