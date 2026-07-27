import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-download');
}

export default function RealMapThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-download" />;
}
