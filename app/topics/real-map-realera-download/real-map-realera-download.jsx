import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-download');
}

export default function RealMapRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-download" />;
}
