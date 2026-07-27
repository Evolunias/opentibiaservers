import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-germany');
}

export default function WithDiscordPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-germany" />;
}
