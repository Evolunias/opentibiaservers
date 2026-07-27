import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-online');
}

export default function OfficialBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-online" />;
}
