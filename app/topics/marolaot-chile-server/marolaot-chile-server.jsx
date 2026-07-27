import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-chile-server');
}

export default function MarolaotChileServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-chile-server" />;
}
