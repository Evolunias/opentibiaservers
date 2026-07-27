import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvpe-forum');
}

export default function Tibia76PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvpe-forum" />;
}
