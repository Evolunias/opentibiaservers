import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-guide');
}

export default function NoResetEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-guide" />;
}
