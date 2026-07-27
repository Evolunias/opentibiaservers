import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-discord-server-latin-america');
}

export default function VenoreotWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-discord-server-latin-america" />;
}
