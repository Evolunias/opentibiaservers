import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-rules');
}

export default function NoResetEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-rules" />;
}
