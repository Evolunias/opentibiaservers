import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-enforced-forum');
}

export default function Tibia96PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-enforced-forum" />;
}
