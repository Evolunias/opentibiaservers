import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-forum');
}

export default function Tibia11PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-forum" />;
}
