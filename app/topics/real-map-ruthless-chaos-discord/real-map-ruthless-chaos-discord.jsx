import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ruthless-chaos-discord');
}

export default function RealMapRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-ruthless-chaos-discord" />;
}
