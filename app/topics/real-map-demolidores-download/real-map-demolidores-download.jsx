import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-download');
}

export default function RealMapDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-download" />;
}
