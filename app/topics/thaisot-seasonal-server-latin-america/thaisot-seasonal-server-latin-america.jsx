import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-latin-america');
}

export default function ThaisotSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-latin-america" />;
}
