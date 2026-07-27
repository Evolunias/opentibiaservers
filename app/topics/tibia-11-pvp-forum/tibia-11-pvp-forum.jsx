import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-forum');
}

export default function Tibia11PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-forum" />;
}
