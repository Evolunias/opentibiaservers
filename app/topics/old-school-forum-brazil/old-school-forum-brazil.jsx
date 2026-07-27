import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-brazil');
}

export default function OldSchoolForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-brazil" />;
}
