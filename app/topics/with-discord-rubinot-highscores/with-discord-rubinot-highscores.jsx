import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-highscores');
}

export default function WithDiscordRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-highscores" />;
}
