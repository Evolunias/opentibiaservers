import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvpe-forum');
}

export default function Tibia84PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvpe-forum" />;
}
