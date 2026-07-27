import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-discord');
}

export default function RealMapRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-discord" />;
}
