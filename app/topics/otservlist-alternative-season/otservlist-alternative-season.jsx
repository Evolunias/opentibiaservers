import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-season');
}

export default function OtservlistAlternativeSeasonKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-season" />;
}
