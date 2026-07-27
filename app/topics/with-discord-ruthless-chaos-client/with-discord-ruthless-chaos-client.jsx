import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ruthless-chaos-client');
}

export default function WithDiscordRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ruthless-chaos-client" />;
}
