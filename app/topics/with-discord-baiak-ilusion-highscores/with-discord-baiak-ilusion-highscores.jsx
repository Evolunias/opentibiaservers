import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-baiak-ilusion-highscores');
}

export default function WithDiscordBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-baiak-ilusion-highscores" />;
}
