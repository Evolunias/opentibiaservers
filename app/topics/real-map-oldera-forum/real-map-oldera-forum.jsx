import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-forum');
}

export default function RealMapOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-forum" />;
}
