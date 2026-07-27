import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-france');
}

export default function WithDiscordPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-france" />;
}
