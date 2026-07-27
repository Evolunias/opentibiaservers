import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-custom-map-players-online');
}

export default function Tibia772CustomMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-custom-map-players-online" />;
}
