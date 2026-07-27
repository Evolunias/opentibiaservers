import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-active-players-server-argentina');
}

export default function CarlinotWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-active-players-server-argentina" />;
}
