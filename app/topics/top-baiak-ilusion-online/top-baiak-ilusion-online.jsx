import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-online');
}

export default function TopBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-online" />;
}
