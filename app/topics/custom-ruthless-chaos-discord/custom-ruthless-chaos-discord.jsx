import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-discord');
}

export default function CustomRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-discord" />;
}
