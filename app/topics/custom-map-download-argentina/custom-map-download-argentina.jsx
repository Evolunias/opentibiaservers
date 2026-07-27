import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-argentina');
}

export default function CustomMapDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-argentina" />;
}
