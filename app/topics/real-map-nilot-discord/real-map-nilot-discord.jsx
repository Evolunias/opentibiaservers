import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-discord');
}

export default function RealMapNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-discord" />;
}
