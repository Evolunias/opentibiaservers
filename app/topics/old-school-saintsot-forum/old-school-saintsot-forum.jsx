import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-forum');
}

export default function OldSchoolSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-forum" />;
}
