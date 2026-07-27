import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-non-pvp-forum');
}

export default function Tibia12NonPvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-non-pvp-forum" />;
}
