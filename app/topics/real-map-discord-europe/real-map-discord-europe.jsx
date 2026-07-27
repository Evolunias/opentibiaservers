import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-europe');
}

export default function RealMapDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-europe" />;
}
