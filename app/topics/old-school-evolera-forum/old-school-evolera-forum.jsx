import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-forum');
}

export default function OldSchoolEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-forum" />;
}
