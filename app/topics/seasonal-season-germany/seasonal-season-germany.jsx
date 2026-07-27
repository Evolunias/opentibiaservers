import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-germany');
}

export default function SeasonalSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-germany" />;
}
