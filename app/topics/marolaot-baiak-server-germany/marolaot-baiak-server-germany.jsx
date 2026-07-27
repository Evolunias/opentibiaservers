import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-germany');
}

export default function MarolaotBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-germany" />;
}
