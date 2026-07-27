import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-mexico');
}

export default function SeasonalForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-mexico" />;
}
