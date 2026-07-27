import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-rules');
}

export default function HighrateNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-rules" />;
}
