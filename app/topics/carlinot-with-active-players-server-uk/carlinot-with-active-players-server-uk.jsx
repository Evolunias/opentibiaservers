import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-active-players-server-uk');
}

export default function CarlinotWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-active-players-server-uk" />;
}
