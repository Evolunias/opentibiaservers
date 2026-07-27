import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-usa');
}

export default function SeasonalForumUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-usa" />;
}
