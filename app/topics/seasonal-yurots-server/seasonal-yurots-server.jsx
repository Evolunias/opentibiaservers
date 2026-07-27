import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-yurots-server');
}

export default function SeasonalYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-yurots-server" />;
}
