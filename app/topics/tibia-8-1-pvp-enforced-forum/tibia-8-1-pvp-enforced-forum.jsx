import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-enforced-forum');
}

export default function Tibia81PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-enforced-forum" />;
}
