import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-uk');
}

export default function MarolaotBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-uk" />;
}
