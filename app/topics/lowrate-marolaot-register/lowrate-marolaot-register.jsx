import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-register');
}

export default function LowrateMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-register" />;
}
