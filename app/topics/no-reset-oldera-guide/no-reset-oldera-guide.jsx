import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-guide');
}

export default function NoResetOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-guide" />;
}
