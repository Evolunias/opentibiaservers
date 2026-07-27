import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-discord-server-latin-america');
}

export default function AmeriaWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-discord-server-latin-america" />;
}
