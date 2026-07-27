import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-guide');
}

export default function NoResetAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-guide" />;
}
