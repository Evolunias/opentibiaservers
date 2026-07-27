import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-guide');
}

export default function NoResetUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-guide" />;
}
