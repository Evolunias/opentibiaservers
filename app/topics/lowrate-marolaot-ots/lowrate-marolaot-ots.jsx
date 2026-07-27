import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-ots');
}

export default function LowrateMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-ots" />;
}
