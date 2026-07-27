import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-login');
}

export default function LowrateMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-login" />;
}
