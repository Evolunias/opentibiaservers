import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-rules');
}

export default function HighrateRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-rules" />;
}
