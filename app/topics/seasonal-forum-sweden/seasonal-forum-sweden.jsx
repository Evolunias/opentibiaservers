import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-sweden');
}

export default function SeasonalForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-sweden" />;
}
