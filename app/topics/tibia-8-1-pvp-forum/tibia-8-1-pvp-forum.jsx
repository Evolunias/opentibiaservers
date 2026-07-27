import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-forum');
}

export default function Tibia81PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-forum" />;
}
