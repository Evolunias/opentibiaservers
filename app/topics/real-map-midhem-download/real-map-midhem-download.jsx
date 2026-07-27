import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-download');
}

export default function RealMapMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-download" />;
}
