import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-canada');
}

export default function RealMapDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-canada" />;
}
