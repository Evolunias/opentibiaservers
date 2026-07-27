import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-guide');
}

export default function TopRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-guide" />;
}
