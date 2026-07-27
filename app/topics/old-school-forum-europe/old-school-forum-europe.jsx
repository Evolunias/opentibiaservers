import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-europe');
}

export default function OldSchoolForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-europe" />;
}
