import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-forum');
}

export default function RealMapNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-forum" />;
}
