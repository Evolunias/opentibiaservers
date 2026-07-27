import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-download');
}

export default function RealMapXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-download" />;
}
