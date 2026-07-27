import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-guide');
}

export default function TopRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-guide" />;
}
