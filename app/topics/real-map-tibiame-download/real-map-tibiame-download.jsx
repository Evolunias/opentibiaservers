import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-download');
}

export default function RealMapTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-download" />;
}
