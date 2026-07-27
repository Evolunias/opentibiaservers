import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-miracle-server');
}

export default function SeasonalMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-miracle-server" />;
}
