import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvpe-forum');
}

export default function Tibia15PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvpe-forum" />;
}
