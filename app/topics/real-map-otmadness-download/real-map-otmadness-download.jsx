import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-download');
}

export default function RealMapOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-download" />;
}
