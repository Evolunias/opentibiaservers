import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-europe');
}

export default function RealMapDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-europe" />;
}
