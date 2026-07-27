import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-brazil');
}

export default function SeasonalStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-brazil" />;
}
