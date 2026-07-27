import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-active-players-server-latin-america');
}

export default function CarlinotWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-active-players-server-latin-america" />;
}
