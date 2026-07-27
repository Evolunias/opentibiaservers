import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-download');
}

export default function RealMapTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-download" />;
}
