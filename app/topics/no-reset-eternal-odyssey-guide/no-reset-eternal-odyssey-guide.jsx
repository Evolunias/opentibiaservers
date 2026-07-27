import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-guide');
}

export default function NoResetEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-guide" />;
}
