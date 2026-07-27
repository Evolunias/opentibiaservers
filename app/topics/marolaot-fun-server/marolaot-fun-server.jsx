import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fun-server');
}

export default function MarolaotFunServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fun-server" />;
}
