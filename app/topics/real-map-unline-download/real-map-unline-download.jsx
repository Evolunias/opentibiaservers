import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-download');
}

export default function RealMapUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-download" />;
}
