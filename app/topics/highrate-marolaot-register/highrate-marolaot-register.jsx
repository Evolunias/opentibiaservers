import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-register');
}

export default function HighrateMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-register" />;
}
