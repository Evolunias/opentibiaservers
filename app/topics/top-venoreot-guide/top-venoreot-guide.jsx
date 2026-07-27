import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-guide');
}

export default function TopVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-guide" />;
}
