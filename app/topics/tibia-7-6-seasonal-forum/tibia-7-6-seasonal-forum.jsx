import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-seasonal-forum');
}

export default function Tibia76SeasonalForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-seasonal-forum" />;
}
