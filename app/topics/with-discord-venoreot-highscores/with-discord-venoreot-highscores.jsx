import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-highscores');
}

export default function WithDiscordVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-highscores" />;
}
