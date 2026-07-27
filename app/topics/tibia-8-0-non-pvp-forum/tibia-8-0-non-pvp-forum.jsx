import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-non-pvp-forum');
}

export default function Tibia80NonPvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-non-pvp-forum" />;
}
