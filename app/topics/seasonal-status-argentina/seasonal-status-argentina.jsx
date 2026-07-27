import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-argentina');
}

export default function SeasonalStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-argentina" />;
}
