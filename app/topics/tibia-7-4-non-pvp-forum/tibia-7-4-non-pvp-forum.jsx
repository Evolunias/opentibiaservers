import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-non-pvp-forum');
}

export default function Tibia74NonPvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-non-pvp-forum" />;
}
