import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-uk');
}

export default function SeasonalStatusUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-uk" />;
}
