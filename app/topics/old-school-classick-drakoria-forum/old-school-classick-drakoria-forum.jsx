import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-forum');
}

export default function OldSchoolClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-forum" />;
}
