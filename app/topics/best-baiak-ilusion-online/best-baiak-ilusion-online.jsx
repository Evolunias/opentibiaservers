import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-online');
}

export default function BestBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-online" />;
}
