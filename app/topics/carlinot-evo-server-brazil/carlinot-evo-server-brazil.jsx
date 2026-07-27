import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-brazil');
}

export default function CarlinotEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-brazil" />;
}
