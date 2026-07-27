import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-servers-poland');
}

export default function CarlinotEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-servers-poland" />;
}
