import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-low-exp-server-sweden');
}

export default function MarolaotLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-low-exp-server-sweden" />;
}
