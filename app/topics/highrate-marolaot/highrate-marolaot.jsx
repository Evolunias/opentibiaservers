import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot');
}

export default function HighrateMarolaotKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot" />;
}
