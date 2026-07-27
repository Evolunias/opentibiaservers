import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-baiak-ilusion-online');
}

export default function RealMapBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-baiak-ilusion-online" />;
}
