import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-forum');
}

export default function Tibia96PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-forum" />;
}
