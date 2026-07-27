import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-rules');
}

export default function NoResetUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-rules" />;
}
