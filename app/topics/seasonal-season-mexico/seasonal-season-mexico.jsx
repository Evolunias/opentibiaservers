import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-season-mexico');
}

export default function SeasonalSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-season-mexico" />;
}
