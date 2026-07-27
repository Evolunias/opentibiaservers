import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-discord-server-france');
}

export default function MarolaotWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-discord-server-france" />;
}
