import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-guide');
}

export default function ActiveRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-guide" />;
}
