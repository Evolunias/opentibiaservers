import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-guide');
}

export default function NoResetAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-guide" />;
}
