import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-guide');
}

export default function CurrentMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-guide" />;
}
