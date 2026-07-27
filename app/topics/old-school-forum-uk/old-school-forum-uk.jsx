import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-uk');
}

export default function OldSchoolForumUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-uk" />;
}
