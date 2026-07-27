import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-discord-players-online');
}

export default function Tibia13WithDiscordPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-discord-players-online" />;
}
