import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-sweden');
}

export default function OldSchoolForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-sweden" />;
}
