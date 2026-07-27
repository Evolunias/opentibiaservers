import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fresh-start-server-argentina');
}

export default function MarolaotFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fresh-start-server-argentina" />;
}
