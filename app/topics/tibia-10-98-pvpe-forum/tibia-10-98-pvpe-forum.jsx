import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvpe-forum');
}

export default function Tibia1098PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvpe-forum" />;
}
