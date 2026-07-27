import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-forum');
}

export default function Tibia71PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-forum" />;
}
