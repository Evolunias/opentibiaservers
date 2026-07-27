import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-guide');
}

export default function NoResetTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-guide" />;
}
