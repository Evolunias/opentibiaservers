import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-latin-america-server');
}

export default function MarolaotLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-latin-america-server" />;
}
