import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-download');
}

export default function RealMapTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-download" />;
}
