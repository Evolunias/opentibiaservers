import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-guide');
}

export default function ActiveMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-guide" />;
}
