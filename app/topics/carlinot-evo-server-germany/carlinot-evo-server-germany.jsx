import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-germany');
}

export default function CarlinotEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-germany" />;
}
