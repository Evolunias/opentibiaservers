import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-discord-server-latin-america');
}

export default function KasteriaWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-discord-server-latin-america" />;
}
