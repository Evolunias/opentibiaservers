import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-custom-map-forum');
}

export default function Tibia15CustomMapForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-custom-map-forum" />;
}
