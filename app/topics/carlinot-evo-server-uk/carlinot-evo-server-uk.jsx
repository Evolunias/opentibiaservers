import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-uk');
}

export default function CarlinotEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-uk" />;
}
