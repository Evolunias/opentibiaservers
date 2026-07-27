import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-discord');
}

export default function RealMapOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-discord" />;
}
