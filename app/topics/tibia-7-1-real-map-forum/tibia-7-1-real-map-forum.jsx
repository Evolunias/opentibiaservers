import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-real-map-forum');
}

export default function Tibia71RealMapForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-real-map-forum" />;
}
