import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-discord');
}

export default function RuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-discord" />;
}
