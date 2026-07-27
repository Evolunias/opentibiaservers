import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-germany-server');
}

export default function MarolaotGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-germany-server" />;
}
