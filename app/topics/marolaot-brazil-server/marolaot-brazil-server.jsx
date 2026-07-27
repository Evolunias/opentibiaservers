import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-brazil-server');
}

export default function MarolaotBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-brazil-server" />;
}
