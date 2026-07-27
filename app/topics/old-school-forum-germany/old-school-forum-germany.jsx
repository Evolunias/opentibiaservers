import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-germany');
}

export default function OldSchoolForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-germany" />;
}
