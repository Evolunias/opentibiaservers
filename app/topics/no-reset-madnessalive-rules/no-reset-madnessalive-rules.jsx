import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-rules');
}

export default function NoResetMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-rules" />;
}
