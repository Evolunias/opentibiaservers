import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-discord');
}

export default function CurrentRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-discord" />;
}
