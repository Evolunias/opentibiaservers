import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-usa');
}

export default function RealMapDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-usa" />;
}
