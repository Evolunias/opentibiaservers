import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-brazil');
}

export default function WithDiscordPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-brazil" />;
}
