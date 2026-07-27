import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-chile');
}

export default function PvpeForumChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-chile" />;
}
