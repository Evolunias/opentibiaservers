import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-rules');
}

export default function BestNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-rules" />;
}
