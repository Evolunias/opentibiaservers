import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-usa');
}

export default function CustomMapDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-usa" />;
}
