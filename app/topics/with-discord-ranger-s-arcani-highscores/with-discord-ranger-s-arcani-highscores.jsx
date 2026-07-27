import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ranger-s-arcani-highscores');
}

export default function WithDiscordRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ranger-s-arcani-highscores" />;
}
