import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-discord');
}

export default function RealMapRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-discord" />;
}
