import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-poland');
}

export default function RealMapDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-poland" />;
}
