import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-download');
}

export default function RealMapRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-download" />;
}
