import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-argentina');
}

export default function SeasonalForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-argentina" />;
}
