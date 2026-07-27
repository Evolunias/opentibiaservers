import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-europe');
}

export default function CustomMapDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-europe" />;
}
