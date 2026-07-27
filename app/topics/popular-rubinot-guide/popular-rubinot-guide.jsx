import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-guide');
}

export default function PopularRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-guide" />;
}
