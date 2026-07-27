import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-canada');
}

export default function MarolaotBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-canada" />;
}
