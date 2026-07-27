import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-baiak-ilusion-forum');
}

export default function RealMapBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-baiak-ilusion-forum" />;
}
