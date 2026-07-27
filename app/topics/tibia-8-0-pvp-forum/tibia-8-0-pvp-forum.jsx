import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-forum');
}

export default function Tibia80PvpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-forum" />;
}
