import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ruthless-chaos-server');
}

export default function WithDiscordRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ruthless-chaos-server" />;
}
