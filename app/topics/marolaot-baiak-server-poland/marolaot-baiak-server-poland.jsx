import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-poland');
}

export default function MarolaotBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-poland" />;
}
