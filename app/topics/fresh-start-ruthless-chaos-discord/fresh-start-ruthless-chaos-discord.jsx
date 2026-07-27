import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-discord');
}

export default function FreshStartRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-discord" />;
}
