import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-guide');
}

export default function WithDiscordArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-guide" />;
}
