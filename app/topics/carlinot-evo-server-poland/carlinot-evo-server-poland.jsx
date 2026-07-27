import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-poland');
}

export default function CarlinotEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-poland" />;
}
