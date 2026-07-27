import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-discord');
}

export default function OfficialRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-discord" />;
}
