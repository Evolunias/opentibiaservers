import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-mexico');
}

export default function CustomMapDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-mexico" />;
}
