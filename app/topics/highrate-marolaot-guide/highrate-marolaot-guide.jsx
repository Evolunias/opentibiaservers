import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-guide');
}

export default function HighrateMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-guide" />;
}
