import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-custom-map-forum');
}

export default function Tibia772CustomMapForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-custom-map-forum" />;
}
