import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-forum');
}

export default function RealMapRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-forum" />;
}
