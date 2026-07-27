import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-online');
}

export default function NewBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-online" />;
}
