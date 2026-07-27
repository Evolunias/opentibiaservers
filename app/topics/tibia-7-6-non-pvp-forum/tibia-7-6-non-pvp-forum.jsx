import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-non-pvp-forum');
}

export default function Tibia76NonPvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-non-pvp-forum" />;
}
