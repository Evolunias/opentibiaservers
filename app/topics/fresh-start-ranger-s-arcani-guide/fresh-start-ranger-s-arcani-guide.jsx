import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-guide');
}

export default function FreshStartRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-guide" />;
}
