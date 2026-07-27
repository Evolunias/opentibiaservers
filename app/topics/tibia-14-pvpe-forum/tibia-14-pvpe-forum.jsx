import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-forum');
}

export default function Tibia14PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-forum" />;
}
