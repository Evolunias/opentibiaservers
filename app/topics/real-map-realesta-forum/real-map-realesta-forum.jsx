import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-forum');
}

export default function RealMapRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-forum" />;
}
