import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-south-america');
}

export default function CustomMapDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-south-america" />;
}
