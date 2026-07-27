import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-germany');
}

export default function RealMapDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-germany" />;
}
