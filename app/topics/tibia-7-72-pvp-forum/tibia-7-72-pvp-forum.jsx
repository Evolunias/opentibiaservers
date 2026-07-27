import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvp-forum');
}

export default function Tibia772PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvp-forum" />;
}
