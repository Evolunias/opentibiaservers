import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-download');
}

export default function RealMapMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-download" />;
}
