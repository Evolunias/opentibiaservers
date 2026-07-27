import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-forum');
}

export default function Tibia13PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-forum" />;
}
