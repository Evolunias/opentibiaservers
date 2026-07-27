import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvpe-forum');
}

export default function Tibia100PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvpe-forum" />;
}
