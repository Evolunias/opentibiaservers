import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-forum');
}

export default function Tibia12PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-forum" />;
}
