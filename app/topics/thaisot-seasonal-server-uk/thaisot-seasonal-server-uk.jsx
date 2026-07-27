import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-uk');
}

export default function ThaisotSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-uk" />;
}
