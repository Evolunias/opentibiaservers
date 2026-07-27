import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-canada');
}

export default function CustomMapDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-canada" />;
}
