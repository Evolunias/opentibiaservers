import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-chile');
}

export default function BaiakForumChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-chile" />;
}
