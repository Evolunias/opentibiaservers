import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-download');
}

export default function RealMapRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-download" />;
}
