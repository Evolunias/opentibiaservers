import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-download');
}

export default function RealMapVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-download" />;
}
