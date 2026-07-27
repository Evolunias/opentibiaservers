import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-download');
}

export default function RealMapOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-download" />;
}
