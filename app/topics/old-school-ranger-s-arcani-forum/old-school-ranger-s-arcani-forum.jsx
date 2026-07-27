import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-forum');
}

export default function OldSchoolRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-forum" />;
}
