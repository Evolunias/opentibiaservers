import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-custom-map-players-online');
}

export default function Tibia100CustomMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-custom-map-players-online" />;
}
