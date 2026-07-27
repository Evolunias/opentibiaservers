import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-chile');
}

export default function NoResetForumChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-chile" />;
}
