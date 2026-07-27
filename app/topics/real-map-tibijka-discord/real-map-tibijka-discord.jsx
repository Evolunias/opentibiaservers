import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-discord');
}

export default function RealMapTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-discord" />;
}
