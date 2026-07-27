import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-rubinot-server');
}

export default function SeasonalRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-rubinot-server" />;
}
