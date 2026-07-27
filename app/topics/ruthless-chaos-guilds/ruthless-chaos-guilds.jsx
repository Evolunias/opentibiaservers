import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-guilds');
}

export default function RuthlessChaosGuildsKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-guilds" />;
}
