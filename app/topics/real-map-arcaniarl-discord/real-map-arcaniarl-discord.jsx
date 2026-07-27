import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-discord');
}

export default function RealMapArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-discord" />;
}
