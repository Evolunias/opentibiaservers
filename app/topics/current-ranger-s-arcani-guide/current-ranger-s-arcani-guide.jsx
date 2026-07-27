import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-guide');
}

export default function CurrentRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-guide" />;
}
