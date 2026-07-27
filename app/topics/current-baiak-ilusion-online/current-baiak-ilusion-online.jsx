import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-online');
}

export default function CurrentBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-online" />;
}
