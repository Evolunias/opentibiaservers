import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-enforced-forum');
}

export default function Tibia13PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-enforced-forum" />;
}
