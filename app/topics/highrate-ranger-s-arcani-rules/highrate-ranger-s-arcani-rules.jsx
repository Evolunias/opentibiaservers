import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-rules');
}

export default function HighrateRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-rules" />;
}
