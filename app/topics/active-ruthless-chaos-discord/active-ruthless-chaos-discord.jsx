import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-discord');
}

export default function ActiveRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-discord" />;
}
