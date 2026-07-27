import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-guide');
}

export default function FreshStartVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-guide" />;
}
