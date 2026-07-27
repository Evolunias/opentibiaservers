import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-enforced-forum');
}

export default function Tibia854PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-enforced-forum" />;
}
