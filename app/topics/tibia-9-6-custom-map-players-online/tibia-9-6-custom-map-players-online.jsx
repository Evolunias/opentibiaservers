import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-custom-map-players-online');
}

export default function Tibia96CustomMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-custom-map-players-online" />;
}
