import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-latin-america');
}

export default function SeasonalForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-latin-america" />;
}
