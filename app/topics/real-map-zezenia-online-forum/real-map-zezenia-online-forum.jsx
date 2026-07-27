import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-forum');
}

export default function RealMapZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-forum" />;
}
