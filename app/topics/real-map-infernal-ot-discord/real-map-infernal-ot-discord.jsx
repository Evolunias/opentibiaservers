import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-discord');
}

export default function RealMapInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-discord" />;
}
