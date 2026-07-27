import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-europe-servers');
}

export default function MarolaotEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-europe-servers" />;
}
