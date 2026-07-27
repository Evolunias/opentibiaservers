import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-download');
}

export default function BestBaiakIlusionDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-download" />;
}
