import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-seasonal-server');
}

export default function Coxaot14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-seasonal-server" />;
}
