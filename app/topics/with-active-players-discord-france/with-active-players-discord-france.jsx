import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-discord-france');
}

export default function WithActivePlayersDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-discord-france" />;
}
