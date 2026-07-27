import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-forum');
}

export default function Tibia74PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-forum" />;
}
