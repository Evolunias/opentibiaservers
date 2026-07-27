import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-download');
}

export default function RealMapNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-download" />;
}
