import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-custom-map-players-online');
}

export default function Tibia854CustomMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-custom-map-players-online" />;
}
