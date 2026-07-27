import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-rules');
}

export default function NoResetEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-rules" />;
}
