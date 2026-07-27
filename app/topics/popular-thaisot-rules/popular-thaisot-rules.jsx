import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-rules');
}

export default function PopularThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-rules" />;
}
