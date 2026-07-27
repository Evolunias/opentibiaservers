import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-real-map-players-online');
}

export default function Tibia100RealMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-real-map-players-online" />;
}
