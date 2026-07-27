import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-usa');
}

export default function ThaisotSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-usa" />;
}
