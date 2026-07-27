import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-guide');
}

export default function NoResetBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-guide" />;
}
