import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-usa');
}

export default function OldSchoolForumUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-usa" />;
}
