import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-download');
}

export default function PopularBaiakIlusionDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-download" />;
}
