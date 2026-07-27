import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-enforced-forum');
}

export default function Tibia76PvpEnforcedForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-enforced-forum" />;
}
