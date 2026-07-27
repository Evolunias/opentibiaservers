import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-server');
}

export default function NewSeasonVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-server" />;
}
