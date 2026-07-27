import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-highscores');
}

export default function WithDiscordYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-highscores" />;
}
