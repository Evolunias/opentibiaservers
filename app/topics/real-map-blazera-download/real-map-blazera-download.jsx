import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-download');
}

export default function RealMapBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-download" />;
}
