import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ruthless-chaos-highscores');
}

export default function WithDiscordRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ruthless-chaos-highscores" />;
}
