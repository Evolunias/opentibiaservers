import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-players-online');
}

export default function Tibia96RealMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-players-online" />;
}
