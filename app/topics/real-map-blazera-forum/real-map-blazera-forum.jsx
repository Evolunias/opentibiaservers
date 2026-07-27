import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-forum');
}

export default function RealMapBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-forum" />;
}
