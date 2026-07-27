import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-download');
}

export default function RealMapTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-download" />;
}
