import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-argentina');
}

export default function OldSchoolForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-argentina" />;
}
