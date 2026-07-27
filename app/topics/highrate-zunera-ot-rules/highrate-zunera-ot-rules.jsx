import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zunera-ot-rules');
}

export default function HighrateZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-zunera-ot-rules" />;
}
