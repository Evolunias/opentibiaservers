import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-players-online');
}

export default function Tibia11RealMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-players-online" />;
}
