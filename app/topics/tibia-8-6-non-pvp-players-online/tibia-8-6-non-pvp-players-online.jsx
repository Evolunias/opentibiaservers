import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-non-pvp-players-online');
}

export default function Tibia86NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-non-pvp-players-online" />;
}
