import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-discord');
}

export default function RealMapVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-discord" />;
}
