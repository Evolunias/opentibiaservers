import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-forum');
}

export default function Tibia12PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-forum" />;
}
