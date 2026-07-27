import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-forum');
}

export default function OldSchoolTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-forum" />;
}
