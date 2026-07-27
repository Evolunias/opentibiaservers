import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-players-online');
}

export default function Tibia11WithDiscordPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-players-online" />;
}
