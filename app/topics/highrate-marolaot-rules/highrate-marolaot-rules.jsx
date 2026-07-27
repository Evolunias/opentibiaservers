import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-rules');
}

export default function HighrateMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-rules" />;
}
