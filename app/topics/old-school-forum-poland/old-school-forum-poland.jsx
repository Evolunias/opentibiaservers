import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-poland');
}

export default function OldSchoolForumPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-poland" />;
}
