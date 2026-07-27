import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-download');
}

export default function CurrentBaiakIlusionDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-download" />;
}
