import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-discord');
}

export default function RealMapHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-discord" />;
}
