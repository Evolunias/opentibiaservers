import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-chile');
}

export default function NonPvpForumChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-chile" />;
}
