import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-europe');
}

export default function ThaisotSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-europe" />;
}
