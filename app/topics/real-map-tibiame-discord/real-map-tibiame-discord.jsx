import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-discord');
}

export default function RealMapTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-discord" />;
}
