import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-login');
}

export default function BestCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="best-canob-login" />;
}
