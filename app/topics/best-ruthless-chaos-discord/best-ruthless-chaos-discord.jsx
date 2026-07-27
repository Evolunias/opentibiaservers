import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-discord');
}

export default function BestRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-discord" />;
}
