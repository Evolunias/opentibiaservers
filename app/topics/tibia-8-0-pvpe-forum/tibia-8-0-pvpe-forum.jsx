import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvpe-forum');
}

export default function Tibia80PvpeForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvpe-forum" />;
}
