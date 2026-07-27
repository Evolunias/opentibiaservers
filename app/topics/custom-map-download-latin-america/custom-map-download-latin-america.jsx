import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-latin-america');
}

export default function CustomMapDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-latin-america" />;
}
