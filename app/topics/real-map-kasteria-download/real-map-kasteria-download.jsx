import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-download');
}

export default function RealMapKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-download" />;
}
