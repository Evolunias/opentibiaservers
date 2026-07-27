import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-download');
}

export default function RealMapCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-download" />;
}
