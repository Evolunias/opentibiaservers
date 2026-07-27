import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-guide');
}

export default function BestMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-guide" />;
}
