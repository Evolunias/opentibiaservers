import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-france');
}

export default function CarlinotEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-france" />;
}
