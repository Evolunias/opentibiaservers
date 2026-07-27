import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-guide');
}

export default function LowrateMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-guide" />;
}
