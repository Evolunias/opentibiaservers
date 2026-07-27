import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-chile');
}

export default function CustomMapForumChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-chile" />;
}
