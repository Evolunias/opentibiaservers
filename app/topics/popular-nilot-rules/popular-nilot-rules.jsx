import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-rules');
}

export default function PopularNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-rules" />;
}
