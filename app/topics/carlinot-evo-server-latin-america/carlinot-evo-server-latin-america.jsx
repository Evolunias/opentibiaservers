import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-latin-america');
}

export default function CarlinotEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-latin-america" />;
}
