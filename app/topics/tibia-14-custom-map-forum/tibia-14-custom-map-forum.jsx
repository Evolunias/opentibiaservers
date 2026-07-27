import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-custom-map-forum');
}

export default function Tibia14CustomMapForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-custom-map-forum" />;
}
