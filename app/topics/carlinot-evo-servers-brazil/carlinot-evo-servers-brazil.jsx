import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-servers-brazil');
}

export default function CarlinotEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-servers-brazil" />;
}
