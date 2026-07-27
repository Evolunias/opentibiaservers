import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-guide');
}

export default function PopularMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-guide" />;
}
