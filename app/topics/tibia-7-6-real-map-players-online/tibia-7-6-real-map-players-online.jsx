import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-real-map-players-online');
}

export default function Tibia76RealMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-real-map-players-online" />;
}
