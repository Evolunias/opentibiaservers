import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-rankings');
}

export default function OtservlistAlternativeRankingsKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-rankings" />;
}
