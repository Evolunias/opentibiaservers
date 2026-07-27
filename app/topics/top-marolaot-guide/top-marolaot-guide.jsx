import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-guide');
}

export default function TopMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-guide" />;
}
