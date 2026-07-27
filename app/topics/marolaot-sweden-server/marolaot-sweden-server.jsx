import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-sweden-server');
}

export default function MarolaotSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-sweden-server" />;
}
