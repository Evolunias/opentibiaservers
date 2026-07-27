import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-non-pvp-forum');
}

export default function Tibia772NonPvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-non-pvp-forum" />;
}
