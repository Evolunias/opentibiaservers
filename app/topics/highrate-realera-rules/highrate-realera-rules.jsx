import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-rules');
}

export default function HighrateRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-rules" />;
}
