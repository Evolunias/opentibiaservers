import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-enforced-forum');
}

export default function Tibia15PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-enforced-forum" />;
}
