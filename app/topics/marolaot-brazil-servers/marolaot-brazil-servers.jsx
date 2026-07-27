import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-brazil-servers');
}

export default function MarolaotBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-brazil-servers" />;
}
