import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-sweden');
}

export default function CarlinotPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-sweden" />;
}
