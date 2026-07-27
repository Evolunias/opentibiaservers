import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-active-players-server-usa');
}

export default function CarlinotWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-active-players-server-usa" />;
}
