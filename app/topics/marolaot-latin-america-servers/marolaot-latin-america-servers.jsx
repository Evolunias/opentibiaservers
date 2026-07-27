import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-latin-america-servers');
}

export default function MarolaotLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-latin-america-servers" />;
}
