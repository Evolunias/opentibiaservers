import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-guide');
}

export default function NoResetRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-guide" />;
}
