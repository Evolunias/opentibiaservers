import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-ot-server');
}

export default function LowrateMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-ot-server" />;
}
