import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-rules');
}

export default function CurrentMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-rules" />;
}
