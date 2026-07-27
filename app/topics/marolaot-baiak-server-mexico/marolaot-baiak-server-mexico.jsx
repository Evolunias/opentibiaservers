import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-mexico');
}

export default function MarolaotBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-mexico" />;
}
