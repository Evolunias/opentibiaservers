import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-forum');
}

export default function Tibia81PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-forum" />;
}
