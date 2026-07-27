import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-discord');
}

export default function RealMapMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-discord" />;
}
