import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-retro-players-online');
}

export default function Tibia1098RetroPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-retro-players-online" />;
}
