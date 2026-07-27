import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-download');
}

export default function RealMapYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-download" />;
}
