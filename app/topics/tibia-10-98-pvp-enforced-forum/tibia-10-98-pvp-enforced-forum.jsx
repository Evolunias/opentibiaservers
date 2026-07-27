import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvp-enforced-forum');
}

export default function Tibia1098PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvp-enforced-forum" />;
}
