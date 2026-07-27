import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-enforced-server-sweden');
}

export default function MarolaotPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-enforced-server-sweden" />;
}
