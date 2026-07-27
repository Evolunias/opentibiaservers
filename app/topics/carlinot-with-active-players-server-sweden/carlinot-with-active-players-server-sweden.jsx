import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-active-players-server-sweden');
}

export default function CarlinotWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-active-players-server-sweden" />;
}
