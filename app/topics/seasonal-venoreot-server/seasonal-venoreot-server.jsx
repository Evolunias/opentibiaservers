import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-venoreot-server');
}

export default function SeasonalVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-venoreot-server" />;
}
