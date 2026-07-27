import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-mexico');
}

export default function RealMapDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-mexico" />;
}
