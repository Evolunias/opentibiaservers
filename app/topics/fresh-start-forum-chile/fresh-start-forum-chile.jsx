import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-chile');
}

export default function FreshStartForumChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-chile" />;
}
