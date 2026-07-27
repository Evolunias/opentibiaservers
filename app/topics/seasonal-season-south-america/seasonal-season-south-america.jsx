import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-south-america');
}

export default function SeasonalSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-south-america" />;
}
