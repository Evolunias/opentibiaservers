import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-discord');
}

export default function RealMapMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-discord" />;
}
