import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-discord');
}

export default function RealMapTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-discord" />;
}
