import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-download');
}

export default function RealMapOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-download" />;
}
