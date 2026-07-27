import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-server-sweden');
}

export default function MarolaotPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-server-sweden" />;
}
