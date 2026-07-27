import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-forum');
}

export default function Tibia14PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-forum" />;
}
