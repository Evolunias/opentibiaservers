import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-online');
}

export default function RealMapTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-online" />;
}
