import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-rules');
}

export default function BestMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-rules" />;
}
