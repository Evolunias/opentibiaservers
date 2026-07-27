import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-mexico-server');
}

export default function MarolaotMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-mexico-server" />;
}
