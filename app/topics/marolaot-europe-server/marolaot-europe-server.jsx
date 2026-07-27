import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-europe-server');
}

export default function MarolaotEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-europe-server" />;
}
