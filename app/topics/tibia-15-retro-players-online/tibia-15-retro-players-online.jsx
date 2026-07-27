import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-players-online');
}

export default function Tibia15RetroPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-players-online" />;
}
