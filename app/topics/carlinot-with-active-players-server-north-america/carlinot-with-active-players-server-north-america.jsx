import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-active-players-server-north-america');
}

export default function CarlinotWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-active-players-server-north-america" />;
}
