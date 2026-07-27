import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-discord');
}

export default function TopRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-discord" />;
}
