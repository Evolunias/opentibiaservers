import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-online');
}

export default function CustomBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-online" />;
}
