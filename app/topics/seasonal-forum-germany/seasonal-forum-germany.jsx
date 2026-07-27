import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-germany');
}

export default function SeasonalForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-germany" />;
}
