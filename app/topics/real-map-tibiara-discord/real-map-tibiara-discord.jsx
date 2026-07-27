import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-discord');
}

export default function RealMapTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-discord" />;
}
