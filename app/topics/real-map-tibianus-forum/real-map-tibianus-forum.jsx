import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-forum');
}

export default function RealMapTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-forum" />;
}
