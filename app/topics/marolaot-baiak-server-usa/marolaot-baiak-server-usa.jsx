import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-usa');
}

export default function MarolaotBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-usa" />;
}
