import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-guide');
}

export default function CurrentRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-guide" />;
}
