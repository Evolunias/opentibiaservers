import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-guide');
}

export default function BestRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-guide" />;
}
