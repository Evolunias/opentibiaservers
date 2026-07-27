import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-guide');
}

export default function CustomVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-guide" />;
}
