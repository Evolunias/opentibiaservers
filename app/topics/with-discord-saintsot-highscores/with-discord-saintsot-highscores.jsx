import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-highscores');
}

export default function WithDiscordSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-highscores" />;
}
