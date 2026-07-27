import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-brazil');
}

export default function CustomMapDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-brazil" />;
}
