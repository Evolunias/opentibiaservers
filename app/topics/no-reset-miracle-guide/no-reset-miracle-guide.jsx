import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-guide');
}

export default function NoResetMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-guide" />;
}
