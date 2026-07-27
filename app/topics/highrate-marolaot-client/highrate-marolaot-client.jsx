import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-client');
}

export default function HighrateMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-client" />;
}
