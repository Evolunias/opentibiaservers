import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ruthless-chaos-guide');
}

export default function WithDiscordRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ruthless-chaos-guide" />;
}
