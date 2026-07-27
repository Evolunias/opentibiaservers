import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-online');
}

export default function NoResetBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-online" />;
}
