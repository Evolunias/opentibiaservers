import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-server');
}

export default function HighrateMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-server" />;
}
