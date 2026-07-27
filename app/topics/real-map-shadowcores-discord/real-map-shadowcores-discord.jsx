import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-discord');
}

export default function RealMapShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-discord" />;
}
