import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-rules');
}

export default function HighrateArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-rules" />;
}
