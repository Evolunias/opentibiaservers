import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-download');
}

export default function RealMapMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-download" />;
}
