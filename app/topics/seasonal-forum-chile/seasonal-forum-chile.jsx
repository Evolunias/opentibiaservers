import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-chile');
}

export default function SeasonalForumChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-chile" />;
}
