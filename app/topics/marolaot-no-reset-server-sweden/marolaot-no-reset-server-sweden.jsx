import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-no-reset-server-sweden');
}

export default function MarolaotNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-no-reset-server-sweden" />;
}
