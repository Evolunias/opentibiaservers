import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-non-pvp-players-online');
}

export default function Tibia1098NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-non-pvp-players-online" />;
}
