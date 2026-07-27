import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-north-america');
}

export default function CustomMapDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-north-america" />;
}
