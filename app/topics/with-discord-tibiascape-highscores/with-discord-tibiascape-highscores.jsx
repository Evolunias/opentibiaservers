import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-highscores');
}

export default function WithDiscordTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-highscores" />;
}
