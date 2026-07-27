import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-forum');
}

export default function Tibia854PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-forum" />;
}
