import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-download');
}

export default function RealMapImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-download" />;
}
