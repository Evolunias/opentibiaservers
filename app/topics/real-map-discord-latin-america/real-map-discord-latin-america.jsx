import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-latin-america');
}

export default function RealMapDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-latin-america" />;
}
