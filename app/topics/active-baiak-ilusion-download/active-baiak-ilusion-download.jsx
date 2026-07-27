import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-download');
}

export default function ActiveBaiakIlusionDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-download" />;
}
