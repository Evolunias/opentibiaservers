import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-argentina-server');
}

export default function MarolaotArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-argentina-server" />;
}
