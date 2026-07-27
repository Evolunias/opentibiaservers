import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-rules');
}

export default function LowrateNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-rules" />;
}
