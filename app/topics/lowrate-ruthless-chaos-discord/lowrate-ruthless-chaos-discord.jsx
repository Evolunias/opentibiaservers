import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-discord');
}

export default function LowrateRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-discord" />;
}
