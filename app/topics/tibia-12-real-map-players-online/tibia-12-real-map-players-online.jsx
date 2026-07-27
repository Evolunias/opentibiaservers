import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-real-map-players-online');
}

export default function Tibia12RealMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-real-map-players-online" />;
}
