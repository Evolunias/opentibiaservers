import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-oxygenot-server');
}

export default function SeasonalOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-oxygenot-server" />;
}
