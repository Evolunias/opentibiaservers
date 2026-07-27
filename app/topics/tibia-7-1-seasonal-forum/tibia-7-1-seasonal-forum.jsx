import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-seasonal-forum');
}

export default function Tibia71SeasonalForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-seasonal-forum" />;
}
