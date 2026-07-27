import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-highscores');
}

export default function WithDiscordEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-highscores" />;
}
