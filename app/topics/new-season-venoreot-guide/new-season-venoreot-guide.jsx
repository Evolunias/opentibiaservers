import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-guide');
}

export default function NewSeasonVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-guide" />;
}
