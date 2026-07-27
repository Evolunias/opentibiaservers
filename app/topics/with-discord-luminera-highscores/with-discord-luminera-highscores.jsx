import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-highscores');
}

export default function WithDiscordLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-highscores" />;
}
