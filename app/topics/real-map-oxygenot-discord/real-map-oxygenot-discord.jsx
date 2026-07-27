import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-discord');
}

export default function RealMapOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-discord" />;
}
