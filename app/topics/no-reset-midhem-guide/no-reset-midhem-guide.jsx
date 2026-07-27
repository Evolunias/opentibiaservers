import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-guide');
}

export default function NoResetMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-guide" />;
}
