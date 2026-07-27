import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-forum');
}

export default function OldSchoolAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-forum" />;
}
