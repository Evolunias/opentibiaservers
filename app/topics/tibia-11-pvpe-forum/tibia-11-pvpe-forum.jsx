import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-forum');
}

export default function Tibia11PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-forum" />;
}
