import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-rules');
}

export default function PopularRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-rules" />;
}
