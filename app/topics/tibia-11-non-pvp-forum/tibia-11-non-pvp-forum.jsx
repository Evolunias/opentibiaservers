import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-forum');
}

export default function Tibia11NonPvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-forum" />;
}
