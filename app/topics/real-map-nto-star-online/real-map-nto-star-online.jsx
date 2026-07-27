import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-online');
}

export default function RealMapNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-online" />;
}
