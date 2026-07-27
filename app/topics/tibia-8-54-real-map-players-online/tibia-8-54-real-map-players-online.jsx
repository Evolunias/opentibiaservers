import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-real-map-players-online');
}

export default function Tibia854RealMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-real-map-players-online" />;
}
