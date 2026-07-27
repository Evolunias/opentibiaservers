import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-discord');
}

export default function RealMapCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-discord" />;
}
