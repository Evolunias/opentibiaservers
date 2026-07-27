import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-custom-map-forum');
}

export default function Tibia12CustomMapForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-custom-map-forum" />;
}
