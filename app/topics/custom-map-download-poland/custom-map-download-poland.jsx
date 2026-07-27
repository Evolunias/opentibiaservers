import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-poland');
}

export default function CustomMapDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-poland" />;
}
