import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-rules');
}

export default function ActiveMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-rules" />;
}
