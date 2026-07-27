import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-status-mexico');
}

export default function SeasonalStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-status-mexico" />;
}
