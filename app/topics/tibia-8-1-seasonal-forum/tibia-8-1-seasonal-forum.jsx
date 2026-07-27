import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-seasonal-forum');
}

export default function Tibia81SeasonalForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-seasonal-forum" />;
}
