import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-brazil');
}

export default function MarolaotBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-brazil" />;
}
