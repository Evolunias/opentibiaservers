import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-active-players-server-poland');
}

export default function CarlinotWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-active-players-server-poland" />;
}
