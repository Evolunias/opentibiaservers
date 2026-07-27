import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-rankings');
}

export default function OtservlistRankingsKeywordPage() {
  return <StaticKeywordPage slug="otservlist-rankings" />;
}
