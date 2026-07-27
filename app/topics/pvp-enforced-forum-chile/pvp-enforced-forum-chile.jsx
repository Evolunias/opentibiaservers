import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-chile');
}

export default function PvpEnforcedForumChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-chile" />;
}
