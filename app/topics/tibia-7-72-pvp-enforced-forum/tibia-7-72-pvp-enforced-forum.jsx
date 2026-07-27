import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvp-enforced-forum');
}

export default function Tibia772PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvp-enforced-forum" />;
}
