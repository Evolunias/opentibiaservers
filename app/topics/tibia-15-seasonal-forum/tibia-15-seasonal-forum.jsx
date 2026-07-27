import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-forum');
}

export default function Tibia15SeasonalForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-forum" />;
}
