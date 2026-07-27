import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-usa');
}

export default function CarlinotEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-usa" />;
}
