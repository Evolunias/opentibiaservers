import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-rules');
}

export default function PopularMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-rules" />;
}
