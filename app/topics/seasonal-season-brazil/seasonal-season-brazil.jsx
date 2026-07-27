import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-brazil');
}

export default function SeasonalSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-brazil" />;
}
