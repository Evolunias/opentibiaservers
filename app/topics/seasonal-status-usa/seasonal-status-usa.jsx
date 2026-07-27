import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-usa');
}

export default function SeasonalStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-usa" />;
}
