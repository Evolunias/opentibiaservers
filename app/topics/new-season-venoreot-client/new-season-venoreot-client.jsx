import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-client');
}

export default function NewSeasonVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-client" />;
}
