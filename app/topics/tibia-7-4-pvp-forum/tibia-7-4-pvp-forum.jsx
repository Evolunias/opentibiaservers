import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-forum');
}

export default function Tibia74PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-forum" />;
}
