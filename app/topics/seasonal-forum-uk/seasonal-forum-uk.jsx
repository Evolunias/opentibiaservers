import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-uk');
}

export default function SeasonalForumUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-uk" />;
}
