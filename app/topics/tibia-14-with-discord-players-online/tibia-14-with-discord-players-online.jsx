import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-discord-players-online');
}

export default function Tibia14WithDiscordPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-discord-players-online" />;
}
