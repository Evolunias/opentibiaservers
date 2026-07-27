import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-rules');
}

export default function HighrateCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-rules" />;
}
