import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-server');
}

export default function BestCanobServerKeywordPage() {
  return <StaticKeywordPage slug="best-canob-server" />;
}
