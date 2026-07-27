import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-sweden');
}

export default function MarolaotRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-sweden" />;
}
