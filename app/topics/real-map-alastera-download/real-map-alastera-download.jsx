import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-download');
}

export default function RealMapAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-download" />;
}
