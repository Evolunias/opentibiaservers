import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-latin-america');
}

export default function RubinotWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-latin-america" />;
}
