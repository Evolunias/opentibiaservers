import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-poland');
}

export default function ThaisotSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-poland" />;
}
