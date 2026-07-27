import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-rules');
}

export default function HighrateHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-rules" />;
}
