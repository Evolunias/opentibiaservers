import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-client');
}

export default function BestCanobClientKeywordPage() {
  return <StaticKeywordPage slug="best-canob-client" />;
}
