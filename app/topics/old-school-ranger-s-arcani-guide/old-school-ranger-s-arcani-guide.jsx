import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-guide');
}

export default function OldSchoolRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-guide" />;
}
