import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-guide');
}

export default function NoResetOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-guide" />;
}
