import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-chile');
}

export default function LowExpForumChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-chile" />;
}
