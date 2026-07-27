import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-players-online');
}

export default function Tibia11CustomMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-players-online" />;
}
