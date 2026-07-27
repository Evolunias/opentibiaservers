import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-discord');
}

export default function RealMapBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-discord" />;
}
