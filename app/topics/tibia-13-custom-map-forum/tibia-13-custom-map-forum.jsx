import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-custom-map-forum');
}

export default function Tibia13CustomMapForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-custom-map-forum" />;
}
