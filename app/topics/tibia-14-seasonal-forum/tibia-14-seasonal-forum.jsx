import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-forum');
}

export default function Tibia14SeasonalForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-forum" />;
}
