import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-rules');
}

export default function MarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="marolaot-rules" />;
}
