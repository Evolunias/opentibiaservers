import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-download');
}

export default function RealMapElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-download" />;
}
