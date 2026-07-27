import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-client');
}

export default function LowrateMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-client" />;
}
