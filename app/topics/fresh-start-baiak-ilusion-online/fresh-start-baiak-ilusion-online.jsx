import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-online');
}

export default function FreshStartBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-online" />;
}
