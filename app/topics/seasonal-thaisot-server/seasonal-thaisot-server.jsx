import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-thaisot-server');
}

export default function SeasonalThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-thaisot-server" />;
}
