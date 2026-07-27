import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-download');
}

export default function RealMapHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-download" />;
}
