import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-guide');
}

export default function NoResetKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-guide" />;
}
