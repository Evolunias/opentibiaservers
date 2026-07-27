import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-guide');
}

export default function NoResetMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-guide" />;
}
