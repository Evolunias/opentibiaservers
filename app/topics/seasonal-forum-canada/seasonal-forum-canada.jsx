import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-canada');
}

export default function SeasonalForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-canada" />;
}
