import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-north-america');
}

export default function CarlinotEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-north-america" />;
}
