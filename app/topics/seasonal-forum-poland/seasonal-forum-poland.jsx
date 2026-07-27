import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-poland');
}

export default function SeasonalForumPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-poland" />;
}
