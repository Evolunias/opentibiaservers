import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-france');
}

export default function SeasonalSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-france" />;
}
