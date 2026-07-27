import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-ot-server');
}

export default function HighrateMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-ot-server" />;
}
