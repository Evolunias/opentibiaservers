import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-forum');
}

export default function Tibia15PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-forum" />;
}
