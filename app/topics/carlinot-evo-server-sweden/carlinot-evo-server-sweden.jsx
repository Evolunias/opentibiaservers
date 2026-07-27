import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-evo-server-sweden');
}

export default function CarlinotEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-evo-server-sweden" />;
}
