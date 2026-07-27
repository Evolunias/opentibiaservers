import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-discord');
}

export default function NewSeasonRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-discord" />;
}
