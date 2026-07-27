import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-canada');
}

export default function ThaisotSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-canada" />;
}
