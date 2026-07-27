import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-forum');
}

export default function Tibia80SeasonalForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-forum" />;
}
