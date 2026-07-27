import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-forum');
}

export default function Tibia76PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-forum" />;
}
