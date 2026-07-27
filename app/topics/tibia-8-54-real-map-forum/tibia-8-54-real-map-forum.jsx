import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-real-map-forum');
}

export default function Tibia854RealMapForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-real-map-forum" />;
}
