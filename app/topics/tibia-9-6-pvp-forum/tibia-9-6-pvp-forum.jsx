import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-forum');
}

export default function Tibia96PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-forum" />;
}
