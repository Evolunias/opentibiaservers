import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-download');
}

export default function RealMapNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-download" />;
}
