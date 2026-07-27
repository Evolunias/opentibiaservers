import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-guide');
}

export default function NoResetOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-guide" />;
}
