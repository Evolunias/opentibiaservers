import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-canada');
}

export default function CarlinotEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-canada" />;
}
