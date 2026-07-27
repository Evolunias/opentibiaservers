import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-guide');
}

export default function PopularVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-guide" />;
}
