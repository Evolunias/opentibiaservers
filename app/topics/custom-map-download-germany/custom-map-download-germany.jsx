import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-germany');
}

export default function CustomMapDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-germany" />;
}
