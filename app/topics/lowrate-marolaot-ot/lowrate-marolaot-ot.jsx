import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-ot');
}

export default function LowrateMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-ot" />;
}
