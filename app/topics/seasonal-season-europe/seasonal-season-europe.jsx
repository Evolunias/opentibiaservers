import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-europe');
}

export default function SeasonalSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-europe" />;
}
