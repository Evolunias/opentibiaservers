import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-active-players-server-france');
}

export default function CarlinotWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-active-players-server-france" />;
}
