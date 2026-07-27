import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-zezenia-online-highscores');
}

export default function WithDiscordZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-zezenia-online-highscores" />;
}
