import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-discord');
}

export default function RealMapRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-discord" />;
}
