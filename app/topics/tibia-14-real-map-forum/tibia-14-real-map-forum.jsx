import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-real-map-forum');
}

export default function Tibia14RealMapForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-real-map-forum" />;
}
