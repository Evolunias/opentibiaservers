import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-custom-map-players-online');
}

export default function Tibia71CustomMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-custom-map-players-online" />;
}
