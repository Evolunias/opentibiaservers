import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-sweden');
}

export default function CarlinotNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-sweden" />;
}
