import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-brazil');
}

export default function SeasonalForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-brazil" />;
}
