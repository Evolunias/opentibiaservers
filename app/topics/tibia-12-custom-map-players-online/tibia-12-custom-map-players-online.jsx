import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-custom-map-players-online');
}

export default function Tibia12CustomMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-custom-map-players-online" />;
}
