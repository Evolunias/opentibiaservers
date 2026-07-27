import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-sweden');
}

export default function RealMapDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-sweden" />;
}
