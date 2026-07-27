import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-guide');
}

export default function NoResetTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-guide" />;
}
