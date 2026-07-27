import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-north-america');
}

export default function SeasonalForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-north-america" />;
}
