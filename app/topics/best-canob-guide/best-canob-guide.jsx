import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-guide');
}

export default function BestCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="best-canob-guide" />;
}
