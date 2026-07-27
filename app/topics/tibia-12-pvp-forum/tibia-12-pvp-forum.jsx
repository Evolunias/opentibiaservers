import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-forum');
}

export default function Tibia12PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-forum" />;
}
