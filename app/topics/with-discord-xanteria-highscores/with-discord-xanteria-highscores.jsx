import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-highscores');
}

export default function WithDiscordXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-highscores" />;
}
