import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-rules');
}

export default function TopMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-rules" />;
}
