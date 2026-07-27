import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-forum');
}

export default function Tibia13RealMapForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-forum" />;
}
