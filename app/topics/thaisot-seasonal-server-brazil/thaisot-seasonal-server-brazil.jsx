import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-brazil');
}

export default function ThaisotSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-brazil" />;
}
