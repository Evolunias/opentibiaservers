import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvpe-forum');
}

export default function Tibia772PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvpe-forum" />;
}
