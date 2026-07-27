import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-ots');
}

export default function HighrateMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-ots" />;
}
