import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-online');
}

export default function RealMapTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-online" />;
}
