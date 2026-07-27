import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-download');
}

export default function RealMapClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-download" />;
}
