import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-ot');
}

export default function HighrateMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-ot" />;
}
