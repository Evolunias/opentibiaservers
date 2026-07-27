import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-brazil');
}

export default function RealMapDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-brazil" />;
}
