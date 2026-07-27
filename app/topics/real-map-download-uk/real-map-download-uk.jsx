import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-uk');
}

export default function RealMapDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-uk" />;
}
