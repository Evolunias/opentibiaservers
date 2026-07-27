import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-discord');
}

export default function RealMapYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-discord" />;
}
