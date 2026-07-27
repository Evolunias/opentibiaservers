import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-rules');
}

export default function TopNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-rules" />;
}
