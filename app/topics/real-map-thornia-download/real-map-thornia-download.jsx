import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-download');
}

export default function RealMapThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-download" />;
}
