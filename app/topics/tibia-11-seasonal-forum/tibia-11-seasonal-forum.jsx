import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-forum');
}

export default function Tibia11SeasonalForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-forum" />;
}
