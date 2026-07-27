import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-rules');
}

export default function LowrateMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-rules" />;
}
