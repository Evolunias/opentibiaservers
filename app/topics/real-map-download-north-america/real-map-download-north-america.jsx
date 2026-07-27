import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-north-america');
}

export default function RealMapDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-north-america" />;
}
