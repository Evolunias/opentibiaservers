import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-online');
}

export default function BaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-online" />;
}
