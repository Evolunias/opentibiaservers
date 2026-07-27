import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-download');
}

export default function RealMapSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-download" />;
}
