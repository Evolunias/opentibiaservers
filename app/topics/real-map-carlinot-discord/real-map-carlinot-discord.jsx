import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-discord');
}

export default function RealMapCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-discord" />;
}
