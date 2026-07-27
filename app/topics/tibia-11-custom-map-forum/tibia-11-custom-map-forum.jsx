import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-forum');
}

export default function Tibia11CustomMapForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-forum" />;
}
