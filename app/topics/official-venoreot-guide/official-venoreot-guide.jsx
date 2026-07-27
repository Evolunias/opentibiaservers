import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-guide');
}

export default function OfficialVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-guide" />;
}
