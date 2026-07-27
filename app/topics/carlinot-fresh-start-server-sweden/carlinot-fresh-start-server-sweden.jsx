import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fresh-start-server-sweden');
}

export default function CarlinotFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fresh-start-server-sweden" />;
}
