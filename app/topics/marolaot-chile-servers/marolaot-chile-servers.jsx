import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-chile-servers');
}

export default function MarolaotChileServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-chile-servers" />;
}
