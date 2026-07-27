import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-discord-server-latin-america');
}

export default function AlasteraWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-discord-server-latin-america" />;
}
