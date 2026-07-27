import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-discord');
}

export default function RealMapTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-discord" />;
}
