import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-discord');
}

export default function RealMapTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-discord" />;
}
