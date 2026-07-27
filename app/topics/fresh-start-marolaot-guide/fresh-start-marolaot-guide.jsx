import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-guide');
}

export default function FreshStartMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-guide" />;
}
