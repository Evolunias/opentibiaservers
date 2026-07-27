import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-chile');
}

export default function HighExpForumChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-chile" />;
}
