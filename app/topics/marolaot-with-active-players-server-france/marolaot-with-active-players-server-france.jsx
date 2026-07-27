import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-active-players-server-france');
}

export default function MarolaotWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-active-players-server-france" />;
}
