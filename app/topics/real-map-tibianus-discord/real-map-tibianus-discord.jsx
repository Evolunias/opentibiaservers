import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-discord');
}

export default function RealMapTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-discord" />;
}
