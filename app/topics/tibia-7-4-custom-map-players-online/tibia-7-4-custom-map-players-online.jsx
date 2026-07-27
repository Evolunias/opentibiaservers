import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-custom-map-players-online');
}

export default function Tibia74CustomMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-custom-map-players-online" />;
}
