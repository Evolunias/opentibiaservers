import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-latin-america');
}

export default function TibiameWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-latin-america" />;
}
