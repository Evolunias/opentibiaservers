import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-download');
}

export default function RealMapCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-download" />;
}
