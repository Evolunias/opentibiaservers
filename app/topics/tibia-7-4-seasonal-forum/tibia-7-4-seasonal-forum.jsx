import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-forum');
}

export default function Tibia74SeasonalForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-forum" />;
}
