import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-forum');
}

export default function Tibia84PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-forum" />;
}
