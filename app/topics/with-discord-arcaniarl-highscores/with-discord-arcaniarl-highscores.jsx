import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-highscores');
}

export default function WithDiscordArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-highscores" />;
}
