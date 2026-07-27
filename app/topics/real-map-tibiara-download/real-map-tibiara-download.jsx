import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-download');
}

export default function RealMapTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-download" />;
}
