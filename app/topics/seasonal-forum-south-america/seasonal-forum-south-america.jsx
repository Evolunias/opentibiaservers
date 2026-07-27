import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-south-america');
}

export default function SeasonalForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-south-america" />;
}
