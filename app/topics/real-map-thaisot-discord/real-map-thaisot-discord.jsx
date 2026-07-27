import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-discord');
}

export default function RealMapThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-discord" />;
}
