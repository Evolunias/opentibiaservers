import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-guide');
}

export default function BestRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-guide" />;
}
