import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-server');
}

export default function LowrateMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-server" />;
}
