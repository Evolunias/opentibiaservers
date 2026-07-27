import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-online');
}

export default function ActiveBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-online" />;
}
