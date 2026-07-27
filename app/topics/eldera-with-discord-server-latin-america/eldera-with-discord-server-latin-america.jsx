import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-latin-america');
}

export default function ElderaWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-latin-america" />;
}
