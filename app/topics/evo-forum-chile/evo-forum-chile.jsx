import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-chile');
}

export default function EvoForumChileKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-chile" />;
}
