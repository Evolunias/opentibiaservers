import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-europe');
}

export default function MarolaotBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-europe" />;
}
