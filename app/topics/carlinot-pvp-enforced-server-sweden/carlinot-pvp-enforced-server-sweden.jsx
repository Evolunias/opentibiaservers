import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-sweden');
}

export default function CarlinotPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-sweden" />;
}
