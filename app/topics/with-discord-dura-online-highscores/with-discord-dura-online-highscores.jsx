import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dura-online-highscores');
}

export default function WithDiscordDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dura-online-highscores" />;
}
