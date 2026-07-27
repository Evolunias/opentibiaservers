import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-12-with-discord-server');
}

export default function RuthlessChaos12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-12-with-discord-server" />;
}
