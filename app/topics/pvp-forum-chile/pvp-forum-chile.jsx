import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-chile');
}

export default function PvpForumChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-chile" />;
}
