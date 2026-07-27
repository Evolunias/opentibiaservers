import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-forum');
}

export default function Tibia11RealMapForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-forum" />;
}
