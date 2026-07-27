import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-carlinot-server');
}

export default function SeasonalCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-carlinot-server" />;
}
