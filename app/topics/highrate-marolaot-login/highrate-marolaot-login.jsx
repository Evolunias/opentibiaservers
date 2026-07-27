import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-login');
}

export default function HighrateMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-login" />;
}
