import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-forum');
}

export default function Tibia84SeasonalForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-forum" />;
}
