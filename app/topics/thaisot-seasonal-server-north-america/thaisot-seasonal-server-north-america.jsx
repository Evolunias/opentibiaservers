import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-north-america');
}

export default function ThaisotSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-north-america" />;
}
