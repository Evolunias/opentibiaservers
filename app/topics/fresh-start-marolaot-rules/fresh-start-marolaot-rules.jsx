import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-rules');
}

export default function FreshStartMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-rules" />;
}
