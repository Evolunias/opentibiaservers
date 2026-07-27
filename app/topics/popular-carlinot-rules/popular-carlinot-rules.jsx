import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-rules');
}

export default function PopularCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-rules" />;
}
