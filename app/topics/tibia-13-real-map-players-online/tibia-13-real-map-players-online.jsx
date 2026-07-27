import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-players-online');
}

export default function Tibia13RealMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-players-online" />;
}
