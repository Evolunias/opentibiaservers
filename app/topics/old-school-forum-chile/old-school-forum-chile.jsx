import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-chile');
}

export default function OldSchoolForumChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-chile" />;
}
