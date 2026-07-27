import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-download');
}

export default function RealMapClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-download" />;
}
