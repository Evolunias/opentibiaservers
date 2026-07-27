import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-rules');
}

export default function NoResetOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-rules" />;
}
