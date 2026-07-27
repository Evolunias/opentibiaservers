import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvpe-forum');
}

export default function Tibia86PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvpe-forum" />;
}
