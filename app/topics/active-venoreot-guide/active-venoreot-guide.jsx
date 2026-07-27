import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-guide');
}

export default function ActiveVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-guide" />;
}
