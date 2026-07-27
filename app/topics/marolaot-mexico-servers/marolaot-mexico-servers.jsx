import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-mexico-servers');
}

export default function MarolaotMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-mexico-servers" />;
}
