import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-highscores');
}

export default function WithDiscordArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-highscores" />;
}
