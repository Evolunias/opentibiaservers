import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-argentina');
}

export default function RealMapDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-argentina" />;
}
