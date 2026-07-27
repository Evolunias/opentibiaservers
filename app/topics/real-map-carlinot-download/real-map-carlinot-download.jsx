import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-download');
}

export default function RealMapCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-download" />;
}
