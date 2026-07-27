import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-download');
}

export default function RealMapCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-download" />;
}
