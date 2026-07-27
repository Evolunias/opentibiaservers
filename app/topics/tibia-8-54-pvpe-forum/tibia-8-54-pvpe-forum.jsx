import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvpe-forum');
}

export default function Tibia854PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvpe-forum" />;
}
