import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-latin-america');
}

export default function CustomMapDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-latin-america" />;
}
