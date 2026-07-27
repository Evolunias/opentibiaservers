import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-discord');
}

export default function NewRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-discord" />;
}
