import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-forum');
}

export default function Tibia14PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-forum" />;
}
