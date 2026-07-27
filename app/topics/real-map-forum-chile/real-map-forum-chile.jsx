import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-chile');
}

export default function RealMapForumChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-chile" />;
}
