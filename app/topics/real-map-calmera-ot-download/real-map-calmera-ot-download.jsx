import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-download');
}

export default function RealMapCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-download" />;
}
