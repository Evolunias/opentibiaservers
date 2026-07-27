import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-real-map-players-online');
}

export default function Tibia15RealMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-real-map-players-online" />;
}
