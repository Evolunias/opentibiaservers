import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ruthless-chaos-ots');
}

export default function WithDiscordRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ruthless-chaos-ots" />;
}
