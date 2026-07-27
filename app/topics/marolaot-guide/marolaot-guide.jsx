import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-guide');
}

export default function MarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="marolaot-guide" />;
}
