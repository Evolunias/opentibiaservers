import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-guide');
}

export default function CurrentOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-guide" />;
}
