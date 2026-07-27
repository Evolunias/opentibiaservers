import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-mexico');
}

export default function CarlinotEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-mexico" />;
}
