import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-guide');
}

export default function NoResetThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-guide" />;
}
