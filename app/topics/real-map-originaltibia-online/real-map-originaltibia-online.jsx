import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-online');
}

export default function RealMapOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-online" />;
}
