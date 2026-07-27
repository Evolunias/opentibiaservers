import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-alternatives');
}

export default function MarolaotAlternativesKeywordPage() {
  return <StaticKeywordPage slug="marolaot-alternatives" />;
}
