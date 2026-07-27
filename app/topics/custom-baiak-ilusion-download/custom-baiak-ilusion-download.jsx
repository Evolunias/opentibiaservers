import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-download');
}

export default function CustomBaiakIlusionDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-download" />;
}
