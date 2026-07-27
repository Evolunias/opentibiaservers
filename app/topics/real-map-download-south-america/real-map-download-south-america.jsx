import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-south-america');
}

export default function RealMapDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-south-america" />;
}
