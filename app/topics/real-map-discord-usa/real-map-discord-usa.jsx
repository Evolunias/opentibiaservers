import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-usa');
}

export default function RealMapDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-usa" />;
}
