import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-online');
}

export default function PopularBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-online" />;
}
