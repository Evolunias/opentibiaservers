import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-uk');
}

export default function CustomMapDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-uk" />;
}
