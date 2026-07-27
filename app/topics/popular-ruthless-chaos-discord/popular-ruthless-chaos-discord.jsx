import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-discord');
}

export default function PopularRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-discord" />;
}
