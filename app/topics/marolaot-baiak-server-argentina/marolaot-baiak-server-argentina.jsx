import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-argentina');
}

export default function MarolaotBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-argentina" />;
}
