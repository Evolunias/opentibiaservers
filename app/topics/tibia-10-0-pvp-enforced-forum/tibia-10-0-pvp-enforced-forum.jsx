import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-enforced-forum');
}

export default function Tibia100PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-enforced-forum" />;
}
