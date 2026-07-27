import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-mexico');
}

export default function RealMapDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-mexico" />;
}
