import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-download');
}

export default function RealMapTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-download" />;
}
