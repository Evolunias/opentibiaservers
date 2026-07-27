import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-forum');
}

export default function RealMapTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-forum" />;
}
