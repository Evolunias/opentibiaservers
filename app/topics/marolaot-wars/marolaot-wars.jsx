import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-wars');
}

export default function MarolaotWarsKeywordPage() {
  return <StaticKeywordPage slug="marolaot-wars" />;
}
