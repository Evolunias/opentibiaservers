import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-canada');
}

export default function RealMapDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-canada" />;
}
