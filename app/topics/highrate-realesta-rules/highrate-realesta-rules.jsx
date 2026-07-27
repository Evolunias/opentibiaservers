import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-rules');
}

export default function HighrateRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-rules" />;
}
