import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-originaltibia-server');
}

export default function SeasonalOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-originaltibia-server" />;
}
