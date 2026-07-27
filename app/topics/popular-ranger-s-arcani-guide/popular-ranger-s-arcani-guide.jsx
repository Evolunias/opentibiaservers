import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-guide');
}

export default function PopularRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-guide" />;
}
