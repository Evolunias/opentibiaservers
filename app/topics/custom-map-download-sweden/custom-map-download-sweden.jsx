import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-sweden');
}

export default function CustomMapDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-sweden" />;
}
