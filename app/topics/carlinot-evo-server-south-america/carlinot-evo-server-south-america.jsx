import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-south-america');
}

export default function CarlinotEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-south-america" />;
}
