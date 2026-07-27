import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-germany');
}

export default function ThaisotSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-germany" />;
}
