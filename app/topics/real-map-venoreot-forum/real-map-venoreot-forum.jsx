import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-forum');
}

export default function RealMapVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-forum" />;
}
