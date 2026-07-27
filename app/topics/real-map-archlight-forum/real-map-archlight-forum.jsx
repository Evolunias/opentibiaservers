import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-forum');
}

export default function RealMapArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-forum" />;
}
