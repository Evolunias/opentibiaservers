import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-europe');
}

export default function SeasonalForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-europe" />;
}
