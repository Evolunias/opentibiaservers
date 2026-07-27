import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-discord');
}

export default function RealMapCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-discord" />;
}
