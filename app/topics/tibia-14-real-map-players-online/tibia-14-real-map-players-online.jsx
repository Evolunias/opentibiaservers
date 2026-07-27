import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-real-map-players-online');
}

export default function Tibia14RealMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-real-map-players-online" />;
}
