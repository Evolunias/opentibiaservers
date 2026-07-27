import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-argentina');
}

export default function CarlinotEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-argentina" />;
}
